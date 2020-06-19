export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This page has been updated. Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
