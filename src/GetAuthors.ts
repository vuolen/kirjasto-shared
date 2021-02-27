import * as t from 'io-ts'
import { Author } from './Author'

export const GetAuthorsRequest = t.void
export type GetAuthorsRequest = t.TypeOf<typeof GetAuthorsRequest>

export const GetAuthorsResponse = t.array(Author)
export type GetAuthorsResponse = t.TypeOf<typeof GetAuthorsResponse>