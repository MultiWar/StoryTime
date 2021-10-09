// TypeScript users only add this code
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type ParagraphElement = {
  type: 'paragraph',
  children: CustomText[]
}

export type HeadingElement = {
  type: 'heading',
  level: 1 | 2 | 3,
  children: CustomText[]
}

export type LinkElement = {
  type: 'link',
  url: string,
  children: CustomText[]
}

export type CustomElement = ParagraphElement | HeadingElement | LinkElement
export type FormattedText = { text: string, bold?: true,  }
export type CustomText = FormattedText

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}