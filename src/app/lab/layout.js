export default function LabLayout({ children }) {
  return (
    <main
      style={{
        border: '1px solid red'
      }}
      data-template
    >
      <div>
        {children}
      </div>
    </main>
  )
}