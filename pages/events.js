

function EventList({ eventlist }) {
    return (
        <div>
            <h1>List of events</h1>
            {eventlist.map((event) => {
                return (
                    <div>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default EventList

export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/events')
    const data = await res.json()

    return {
        props: {
            eventlist: data
        }
    }
}
