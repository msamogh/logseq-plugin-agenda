import { useState } from 'react'
import { type Output, number, object, string, picklist } from 'valibot'

import type { AgendaObjective } from '@/types/objective'

const editFormSchema = object({
  title: string(),
  objective: object({
    type: picklist(['week', 'month']),
    year: number(),
    number: number(),
  }),
})
export type EditObjectiveForm = Output<typeof editFormSchema>

const useEdit = (initialData: AgendaObjective) => {
  const _initialData = { title: initialData.title, objective: initialData.objective }
  const [formData, setFormData] = useState<EditObjectiveForm>(_initialData)

  const updateFormData = (data: Partial<EditObjectiveForm>) => {
    setFormData((_data) => ({
      ..._data,
      ...data,
    }))
  }

  const edit = async () => {
    // const block = await editObjectiveBlock({
    //   title: formData.title,
    //   period: formData.period,
    // })
    // if (!block) {
    //   logseq.UI.showMsg('Failed to create objective block')
    //   throw new Error('Failed to create objective block')
    // }
    // return block
  }
  const reset = () => {
    setFormData(_initialData)
  }

  return { formData, updateFormData, edit, reset }
}

export default useEdit
