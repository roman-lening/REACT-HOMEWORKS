import { useForm } from "react-hook-form";
import styles from "./style.module.css";
function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const firstInput = watch("firstName");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>First Field</label>
      <input
        type="text"
        {...register("firstName", {
          required: "Поле обязательно",
          minLength: {
            value: 5,
            message: "Минимум 5 символов",
          },
        })}
      />

      {errors.firstName && (
        <p className={styles.error}>{errors.firstName.message}</p>
      )}

      {firstInput?.length >= 5 && !errors.firstName && (
        <>
          <label>Second Field</label>
          <input
            type="text"
            {...register("secondName", {
              required: "Поле обязательно",
            })}
          />

          {errors.secondName && (
            <p className={styles.error}>{errors.secondName.message}</p>
          )}
        </>
      )}

      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
