import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Controller')({
  component: Controller,
})

function Controller() {
  return <div>Hello "/Controller"!</div>
}
