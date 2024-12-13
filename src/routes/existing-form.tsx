import { forwardRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form"
import Heading from '../components/Heading/Heading'
import { HeadingLevel } from '../types/enums/HeadingLevel.enum'

interface IFormValues {
  "First Name": string
  Age: number
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean,
}


const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} className="border border-1 border-neutral-400 px-1.5 py-1 rounded-md" />
  </>
)

const Select = forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className="border border-1 border-neutral-400 px-1.5 py-1 rounded-md">
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))

export const Route = createFileRoute('/existing-form')({
  component: ExistingForm
})

function ExistingForm() {
  const {
    register,
    handleSubmit,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <Heading headingLevel={HeadingLevel.h1}>React form hook</Heading>
      <Heading headingLevel={HeadingLevel.h2}>Existing form</Heading>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-[300px] mx-auto">
        <Input label="First Name" register={register} required />
        <Select label="Age" {...register("Age")} />
        <input type="submit" className="bg-blue-500 text-white p-2 rounded-md" />
      </form>
    </>
  )
}

