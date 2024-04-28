import { fetchAPI } from '@/app/utils/fetch-api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PageHeader from '@/components/PageHeader/PageHeader';
import Post, { Article } from '@/components/Post/Post';


interface SlugProps {
    article: Article;
}

export default function SlugRoute({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!article) {
        return <div>No article found</div>; // Return a fallback message or component
    }
    console.log(article,"article")
    return (
        <div>
            {/* <PageHeader heading={article.title} text={article.description} /> */}
            <Post data={article} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SlugProps> = async ({ params }) => {
    const slug = params?.slug as string;
    try {
        const { data } = await fetchPostBySlug(slug);

        if (!data) {
            return {
                notFound: true,
            };
        }
        console.log(data,"sl")
        const article = data[0]; // Ensure article is an object
        return {
            props: {
                article: article ? article : null, // Return null if article is undefined
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                article: null, // Return null in case of an error
            },
        };
    }
};

async function fetchPostBySlug(slug: string) {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = '/articles';
        const urlParamsObject = {
            filters: {
                slug,
            },
            populate: {
                cover: { fields: ['url'] },
                authorsBio: { populate: '*' },
                category: { fields: ['name'] },
                blocks: { populate: '*' },
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        console.log(responseData,"response");
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch post by slug');
    }
}