import { render, screen } from "@testing-library/react";
import Posts, { getStaticProps } from "../../pages/posts";
import { stripe } from "../../services/stripe";
import { mocked } from "ts-jest/utils";
import {getPrismicClient} from '../../services/prismic'

jest.mock('../../services/prismic')

const posts=[
    {slug: 'my-new-post',title: 'My New Post', excerpt: 'Post excerpt', updateAt: '10 de Abril'}
]

describe("Post page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockResolvedValueOnce({
        query: jest.fn().mockResolvedValueOnce({
            results: [
                {
                    uid:'my-new-post',
                    data:{
                        title:[
                            {type:'heading',text:' My new post'}
                        ],
                        content:[
                            {type: 'paragraph', text 'Post exerpt'}
                        ], 
                    },
                    last_publication_date: '04-01-2021',
                }
            ]
        })
    }as any)

   

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug:'my-new-post',
            title:'My new Post',
            exerpt: 'Post exerpt',
            updatedAt: '1 de abril de 2021'
          }],
        },
      })
    );
  });
});
