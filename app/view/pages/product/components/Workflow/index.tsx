interface Props {
  title: string
  workflows: Array<any>
}

export default function Workflow({ title, workflows }: Props) {
  return (
    <div className="flex flex-col space-y-8 p-16 sm:px-32">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl md:font-medium">
        {title}
      </h1>

      <div className="flex flex-col justify-center gap-8 rounded-md bg-secondaryBackground p-8 md:grid md:grid-cols-3 md:gap-24 md:p-12 md:px-16">
        {workflows.map((workflow: any, index: number) => (
          <div key={workflow.title + index} className="flex flex-row space-x-8">
            <div className="flex max-w-md flex-col space-y-3">
              <img
                src={workflow.image}
                className="h-16 w-16 object-contain"
                alt="Banner"
              />
              <h4 className="text-2xl font-semibold text-white">
                {workflow.title}
              </h4>
              <p className="text-md text-white">{workflow.subTitle}</p>
            </div>

            <div className="my-auto flex justify-center">
              <img
                src="/assets/icons/right-arrow.svg"
                className="h-96 w-96 object-contain"
                alt="Banner"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
