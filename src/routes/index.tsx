import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormInputContainer from '../components/form/FormInputContainer/FormInputContainer'
import FormLabel from '../components/form/FormLabel/FormLabel'
import FormErrorMessage from '../components/form/FormErrorMessage/FormErrorMessage'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type BasicInputs = {
  example: string
  exampleRequired: string
  gender: GenderEnum
}

export const Route = createFileRoute('/' as keyof FileRoutesByPath)({
  component: Index,
})

function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInputs>()
  const onSubmit: SubmitHandler<BasicInputs> = (data) => console.log(data)

  return (
    <>
      <h1 className="max-w-[300px] mx-auto text-3xl mb-4 flex justify-center w-full">React form hook</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-[300px] mx-auto">
        <FormInputContainer>
          <FormLabel>First name:</FormLabel>
          <input
            defaultValue="test"
            {...register('example', { maxLength: 20 })}
            className="border border-1 border-neutral-400 px-1.5 py-1 rounded-md"
          />

          {errors.example && (
            <FormErrorMessage>max 20 characters</FormErrorMessage>
          )}
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Last name:</FormLabel>
          <input
            {...register('exampleRequired', { required: true })}
            className="border border-1 border-neutral-400 px-1.5 py-1 rounded-md"
          />

          {errors.exampleRequired && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Aanhef:</FormLabel>
          <select {...register('gender', { required: true })} className="border border-1 border-neutral-400 px-1.5 py-1 rounded-md">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          </FormInputContainer>

        <input
          type="submit"
          disabled={Boolean(errors.example) || Boolean(errors.exampleRequired)}
          className="bg-blue-500 text-white p-2 rounded-md"
        />
      </form>
    </>
  )
}
