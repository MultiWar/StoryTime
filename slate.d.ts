// TypeScript users only add this code
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type ParagraphElement = {
  type: 'paragraph',
  children: CustomText[]
}

export type HeadingElement = {
  type: 'heading-one',
  children: CustomText[]
}

export type QuoteElement = {
  type: 'quote',
  children: CustomText[]
}

export type DividerELement = {
  type: 'divider',
  children: CustomText[]
}

export type CustomElement = ParagraphElement | HeadingElement | QuoteElement | DividerELement
export type FormattedText = { text: string, bold?: true, italic?: true, code?: true, underline?: true, strikethrough?: true }
export type CustomText = FormattedText

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}