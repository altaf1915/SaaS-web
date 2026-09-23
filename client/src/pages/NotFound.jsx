import { Link } from "react-router-dom"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"

function NotFound() {
  return (
    <section className="min-h-[70vh]">
      <Container className="flex min-h-[70vh] items-center justify-center py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            404
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Page not found
          </h1>

          <p className="mt-4 text-slate-600">
            The page you're looking for doesn't exist.
          </p>

          <Link to="/" className="mt-8 inline-flex">
            <Button>
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default NotFound