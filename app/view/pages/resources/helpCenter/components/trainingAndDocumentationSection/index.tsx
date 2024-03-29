export default function AkilaBussinessCloudSection({
  children,
  heading,
  description,
  title
}) {
  return (
    <div className="container_class">
      <div className="mt-[100px]">
        <div className="mb-[48px] max-w-[821px] ">
          <div className="mb-6 text-center font-sans text-[40px] font-semibold leading-[48px]">
            {heading}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
