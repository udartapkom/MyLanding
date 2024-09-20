"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { validateField } from "@/utils/validateFields";

export interface FormValues {
  [key: string]: string;
}
interface FormErrors {
  [key: string]: string;
}
interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}
export const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const trimmedValue = event.target.value.trim();

    setValues((prevValues) => ({
      ...prevValues,
      [name]: trimmedValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, trimmedValue),
    }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  }
  console.log(errors);
  return {
    values,
    errors,
    handleBlur,
    handleSubmit
  };
};
