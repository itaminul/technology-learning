export interface FormData {
  name: string;
  email: string;
}


export interface RegisterFormData {
  id?: string;
  email: string;
  password: string;
}

export interface RegisterFormState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  forms: RegisterFormData[];
}
