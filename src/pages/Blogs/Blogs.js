import React from 'react';
import BlogCard from './BlogCard';
import SearchQuestion from './SearchQuestion';

const Blogs = () => {
    return (
        <div className="w-full flex flex-col items-center mt-5 py-20 min-h-screen">
            <h1 className="text-4xl text-sky-600 font-bold mb-5">My Blogs</h1>
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5">
                <BlogCard
                    question="How will you improve the performance of a React Application?"
                    answer="React Js সাধারনত অতি জনপ্রিয় হওয়ার কারন হচ্চে এটি দিয়ে খুব সহযেই single page application বানানো যায় । কিন্ত যেহুতু এটি একটি কম্পোনেন্ট বেইজড লাইব্রেরী তাই এটির বিভিন্ন কোম্পোনেন্ট বার বার re-render হওয়ার কারনে অনেক সময় performance slow হয়ে যায় যার জন্য আমরা কিছু সমাধানের চেষ্টা করে দেখব। যেমনঃ- ১- কম্পোনেন্টকে memorize করে দেওয়া যার কারন কোন একটি কম্পোনেন্ট যদি রেন্ডার হয় তার জন্য অন্য কোন কম্পোনেন্ট রেন্ডার হবে না আরো যেম্ন lazy loading, এবং প্রোডাকশনে npm run buld ব্যাবহার করে minified version host করা ইত্যাদি।"
                />
                <BlogCard
                    question="What are the different ways to manage a state in a React application?"
                    answer="আমরা React এর state সাধারনত ৪ ভাবে manage করে থেকি ১। Local State আমরা লোকালি react এর build in useState hook ব্যাবহার করে স্টেট manage করতে পারি ২. Global State দিয়ে  React Context API এর মাধ্যমে আমরা state manage করতে পারি ৩।  React Query এর মাধ্যমে আমরা ডাটা manage করতে পারি। ৪। URL State React Route Dom এর মধ্যমে যেমন useHistory, useLocation এর মাধ্যমেও আমরা state manage করতে পারি।"
                />
                <BlogCard
                    question="How does prototypical inheritance work?"
                    answer="প্রোটোটাইপিক্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যার মাধ্যমে আমরা একটি Object থেকে অন্য একটি Object কে extend করে তার property গুলো re-use করতে পারি যার মাধ্যমে আমাদের epplication আরো শক্তিশালী বা অনেক better performance করে থাকে।"
                />
                <BlogCard
                    question="What is a unit test? Why should write unit tests?"
                    answer="Unit Test হলো কোন একটি application যখন build করা হয় তার মধ্যে দেখা যায় অনেক সময় অনেক প্রকার bug পাওয়া যায় যদিও প্রথমত সমস্যা না হয় কিন্তু একজন user আস্তে আস্তে সেটি সাফার করে । তাই কোন application production এ দেওয়ার আগে তার গুনগত মান বা তার কোডের কোথাও কোন bug বা error আছে কিনা তা খতিয়ে দেখাই হচ্ছে unit Test।"
                />
                <SearchQuestion />
            </div>
        </div>
    );
};

export default Blogs;