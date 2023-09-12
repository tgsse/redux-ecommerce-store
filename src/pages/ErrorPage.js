import Header from '../components/Layout/Header'

export default function ErrorPage() {
    return (
        <>
            <Header />
            <main>
                <h1>Error!</h1>
                <p>Could not find the page requested.</p>
            </main>
        </>
    )
}
