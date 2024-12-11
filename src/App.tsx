// import { useForm, SubmitHandler } from "react-hook-form";
// import './App.css';

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// type BasicInputs = {
//   example: string;
//   exampleRequired: string;
//   gender: GenderEnum;
// }

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BasicInputs>();
//   const onSubmit: SubmitHandler<BasicInputs> = (data) => console.log(data);

//   return (
//     <>
//       <h2>React form hook</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <div className="form__input-wrapper">
//           <label className="form__label">First name: </label>
//           <input defaultValue="test" {...register("example", { maxLength: 20 })} className="form__input" />

//           {errors.example && <span className="form__input--error">max 20 characters</span>}
//         </div>

//         <div className="form__input-wrapper">
//           <label className="form__label">Last name: </label>
//           <input {...register("exampleRequired", { required: true })} className="form__input" />

//           {errors.exampleRequired && <span className="form__input--error">This field is required</span>}
//         </div>

//         <div className="form__input-wrapper">
//           <select {...register("gender", { required: true })}>
//             <option value="female">female</option>
//             <option value="male">male</option>
//             <option value="other">other</option>
//           </select>
//         </div>

//         <input type="submit" disabled={Boolean(errors.example) || Boolean(errors.exampleRequired)} />
//       </form>
//     </>
//   )
// }

// export default App
