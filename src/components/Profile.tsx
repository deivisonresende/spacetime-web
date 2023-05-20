import Image from 'next/image'
import { User } from '@/lib/auth'

interface Props {
  data: User
}

export function Profile(props: Props) {
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={props.data.avatarUrl}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <p className="max-w-[140px] text-sm ">
        {props.data.name}

        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-500"
        >
          Quero sair!
        </a>
      </p>
    </div>
  )
}
