import React, { useEffect, useState } from 'react'
import { problems } from '~/mockProblems/problems'
import { BsCheckCircle } from 'react-icons/bs'
import Link from 'next/link'
import { AiFillYoutube } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import YouTube from 'react-youtube'

type ProblemsTableProps = {}

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: ''
  })

  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: '' })
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      <tbody className='text-white'>
        {problems.map((doc, idx) => {
          const difficultyColor =
            doc.difficulty === 'Easy'
              ? 'text-dark-green-s'
              : doc.difficulty === 'Medium'
              ? 'text-dark-yellow'
              : 'text-dark-pink'

          return (
            <tr
              key={doc.id}
              className={idx % 2 === 1 ? 'bg-dark-layer-1' : ''}
            >
              <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                <BsCheckCircle fontSize={18} />
              </th>
              <td className='px-6 py-4'>
                <Link
                  className='hover:text-blue-600 cursor-pointer'
                  href={`/problems/${doc.id}`}
                >
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>
                {doc.difficulty}
              </td>
              <td className='px-6 py-4'>{doc.category}</td>
              <td className='px-6 py-4'>
                {doc.videoId ? (
                  <AiFillYoutube
                    fontSize={18}
                    className='cursor-pointer hover:text-red-600'
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: doc.videoId as string
                      })
                    }
                  />
                ) : (
                  <p className='text-gray-400'>Coming soon</p>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>

      {youtubePlayer.isOpen && (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50'>
          <div
            className='bg-black opacity-70 absolute top-0 left-0 w-full h-full'
            onClick={closeModal}
          ></div>
          <div className='w-full h-full px-6 relative max-w-4xl z-50 flex items-center justify-center'>
            <div className='w-full relative'>
              <IoClose
                fontSize={35}
                className='cursor-pointer absolute -top-16 right-0 z-50 text-white'
                onClick={closeModal}
              />
              <YouTube
                videoId={youtubePlayer.videoId}
                loading='lazy'
                iframeClassName='w-full min-h-[500px]'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProblemsTable
