import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Страница four",
    description: "Некоторая страничка",
}
const layout = ({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}
export default layout;