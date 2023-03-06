const Topbar = () => {
  return (
    <div className="flex-direction: row flex justify-between">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="flex gap-x-4">
        <input type="search" className="rounded-lg bg-slate-100" />
        <div
          id="notifications"
          className="h-5 w-5 rounded-full bg-orange-600"
        ></div>

        <div id="profile" className="h-5 w-5 rounded-full bg-green-600"></div>
      </div>
    </div>
  )
}

export default Topbar
