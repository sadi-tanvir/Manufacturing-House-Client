import React from 'react';

const BlogCard = ({ question, answer }) => {
    return (
        <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div class="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;