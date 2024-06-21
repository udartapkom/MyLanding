const layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <header>Это хедер</header>
            <main>{children}</main>
        </>
    )
}
export default layout;