export interface iSliders {
    id: number,
    backgroundColor: string,
    title: string,
    text: string,
    image: string
}
export const slides: iSliders[] = [
    {
        id: 1,
        backgroundColor: 'linear-gradient(#13B0F3 0%, #0C3C88 100%)',
        title: 'Преимущества лендинга на Next.js',
        text: 'SEO-оптимизация. Платформа предоставляет инструменты для оптимизации сайта под поисковые системы, что помогает улучшить видимость в результатах поиска.',
        image: 'https://avatars.mds.yandex.net/i?id=e7f722ff01014daf49913da312b91d77_l-5349850-images-thumbs&n=13'
    },
    {
        id: 2,
        backgroundColor: 'linear-gradient(#13B0F3 0%, #0C3C88 100%)',
        title: 'Преимущества лендинга на ReactJS',
        text: 'Текст номер два.',
        image: 'https://i.pinimg.com/originals/bf/1e/d0/bf1ed039465f1e433fb2508a2a138d8d.jpg'
    },
    {
        id: 3,
        backgroundColor: 'linear-gradient(#13B0F3 0%, #0C3C88 100%)',
        title: 'Почему не CMS?',
        text: 'Текст номер три.',
        image: 'https://www.bellazon.com/main/uploads/monthly_05_2017/post-84333-0-1593837883-90085.jpg'
    },
    {
        id: 4,
        backgroundColor: 'linear-gradient(#13B0F3 0%, #0C3C88 100%)',
        title: 'Ещё какие-то причины',
        text: 'Текст номер четыре.',
        image: 'https://ae04.alicdn.com/kf/S8950103e75ce48928f2ccc3f6890b7f6g.jpg'
    },
]