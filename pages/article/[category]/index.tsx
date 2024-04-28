import { fetchAPI } from '@/app/utils/fetch-api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PageHeader from '@/components/PageHeader/PageHeader';
import PostList, { Article } from '@/components/PostList/PostList';

interface Category {
    name: string;
    description: string;
}



interface CategoryProps {
    category: Category;
    data: Article[];
}

export default function CategoryRoute({ category, data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <PageHeader heading={category.name} text={category.description} />
            <PostList data={data} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<CategoryProps> = async ({ params }) => {
    const filter = params?.category as string;
    try {
        const { data } = await fetchPostsByCategory(filter);

        if (!data || data.length === 0) {
            return {
                notFound: true,
            };
        }

        const { name, description } = data[0]?.attributes.category.data.attributes;

        return {
            props: {
                category: {
                    name,
                    description,
                },
                data,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                category: {
                    name: '',
                    description: '',
                },
                data: [],
            },
        };
    }
};

async function fetchPostsByCategory(filter: string) {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = '/articles';
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts by category');
    }
}
