import {InfoArticleModel} from "@/shared/InfoArticleModel.ts";

type Props = {
    article: InfoArticleModel
}

function Card({ article }: Props) {

    return (
        <article
            className={'pt-4 md:pt-6'}
        >
            <div
                className={'rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative mx-auto'}
                style={{
                    backgroundImage: `url(${article.imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '327px',
                    height: '268px'
                }}
            >
                <div className='bg-secondary-2 w-[280px] h-[140px] z-40 absolute top-28 rounded-md p-4'>
                    <div>
                        <h3 className="text-primary-4 font-montserrat text-m-20 font-medium">
                            {article.sourceName}
                        </h3>
                        <p className="text-primary-4 text-sm font-karla font-normal">
                            {article.title}
                        </p>
                    </div>
                    <a className='font-karla text-k-16 font-medium' href={`${article.articleUrl}`} target='_blank'>Learn more</a>
                </div>
            </div>
        </article>
    );
}

export default Card;