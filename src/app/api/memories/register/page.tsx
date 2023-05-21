import { ChevronLeft, Upload } from 'lucide-react'

import Link from 'next/link'

export default function RegisterNewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <form action="" method="post" className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <input type="file" id="media" className="hidden" />
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Upload className="h-4 w-4" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Tornar memória pública
          </label>
        </div>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          spellCheck={false}
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          className="w-full flex-1 resize-none rounded border-gray-700 bg-transparent text-lg leading-relaxed text-gray-100 placeholder:text-gray-400"
        ></textarea>
      </form>
    </div>
  )
}
