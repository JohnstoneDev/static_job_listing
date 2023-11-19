

export const Container = ({ children }) => {
  return (
    <div className="tablet:container m-auto p-4 overflow-hidden space-y-2 flex flex-col gap-2">
        {children}
    </div>
  )
}