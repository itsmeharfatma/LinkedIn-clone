import React from 'react';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className='flex p-2 cursor-pointer'>
                <div className='mr-2'>
                    <i class="fa-solid fa-circle fa-2xs" style={{ color: "#585858" }}></i>
                </div>
                <div className='mt-0.5'>
                    <h4 className='font-semibold text-sm text-[#585858]'>{heading}</h4>
                    <p className='font-light text-xs text-[#86888a]'>{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='w-1/5 sticky top-20 bg-white rounded-lg h-fit pb-4 '>
            <div className='flex items-center justify-between p-2'>
                <h2 className='font-semibold text-[#3f3f3f] text-md'>LinkedIn News</h2>
                <i class="fa-solid fa-circle-info" style={{ color: "#333333" }}></i>
            </div>

            {newsArticle('How India is spending', ' A study by the National Sample Survey Office (NSSO).')}
            {newsArticle('Grooming women CEOs in finance', 'Out of the 142 listed BFSI (banking, financial services, and insurance) companies in the NSE-1000, only seven are led by women, according to FY23 data from Prime Database.')}
            {newsArticle('Decoding the Disney-Reliance deal', 'Reliance Industries Limited and the Walt Disney Company announced a joint venture earlier this week between their media businesses in India.')}
            {newsArticle('More women look to study abroad', 'The share of women applicants overall have risen to 40-45% in FY24 from 20-30% in FY21, according to education consultants.')}
            {newsArticle('Healthcare IPOs on recovery path', 'The share of healthcare IPOs in the overall market is at 13%, while it was just 4% for 12 years before the pandemic, reports Business Standard.')}
        </div>
    );
}

export default Widgets;