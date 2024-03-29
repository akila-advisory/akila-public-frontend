import { TickComponent } from '~/view/components'

export default function DemoVideoOfAkilaSection() {
  return (
    <div className="flex w-[100%] flex-col items-center p-10">
      <h2 className="mb-[42px] text-center font-sans leading-[36px] text-[#E7E7E7] sm:leading-[48px]">
        Watch Demo Video
      </h2>
      <p className="mb-[27px] text-center font-sans text-[14px] font-normal leading-[22px] text-[#E7E7E7] sm:text-base">
        See how Akila Analytics can help you gain insights from your data, make
        data-driven decisions, and drive business growth.
      </p>
      <div
        className="relative mb-[29px] h-0 w-full max-w-[540px] overflow-hidden"
        style={{ paddingTop: '56.25%' }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/noGW8OFr6Ko?si=xzNP8MrtwninZZMU&controls=1&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          rel={'0'}
          allowFullScreen
        ></iframe>
      </div>
      <ul className="">
        {demoVideoAkilaSectionListData.map((data, index) => (
          <li className="mb-[28px] flex gap-3" key={index}>
            <TickComponent />
            <span> {data.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const demoVideoAkilaSectionListData = [
  {
    description:
      'Learn how Akila Analytics can help you collaborate with your team in real time, share insights, and make informed decisions faster.'
  },
  {
    description: 'Use Akila to quickly analyze data and drive results.'
  },
  {
    description:
      'Improve your business performance by using Akila to make data-driven decisions.'
  }
]
