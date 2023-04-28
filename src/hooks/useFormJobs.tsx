import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useFormJobs = () => {
  const validationSchema = z.object({
    title: z.string().min(1, { message: 'Escreva um título válido' }),
    description: z.string().min(1, { message: 'Escreva uma descrição válida' }),
    role: z.string().min(1, { message: 'Escreva um cargo válido' }),
    company: z.string().min(1, { message: 'Escreva uma empresa válida' }),
    location: z.string().min(1, { message: 'Escreva uma localização válida' }),
    experience: z.string().min(1, { message: 'Escreva uma empresa válida' }),
    salary: z.string().min(1, { message: 'Escreva um salário válido' }),
    link: z.string().min(1, { message: 'Escreva um link válido' }),
    remote: z.boolean(),
  })

  type TValidationSchema = z.infer<typeof validationSchema>

  const { handleSubmit, register, formState } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  return { handleSubmit, register, formState }
}
