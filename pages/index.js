import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <div className="turing-tape">
        <div className="turing-cell">1</div>
        <div className="turing-cell">0</div>
        <div className="turing-cell">1</div>
        <div className="turing-cell">B</div>
        <div className="turing-cell">1</div>
        <div className="turing-cell">0</div>
      </div>
      {/* ...existing blog content... */}
    </div>
  )
}