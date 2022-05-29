import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className="w-full flex flex-col items-center mt-5 py-20 h-screen">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-2">
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
                 answer="প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা অবজেক্টে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়।"
                />
            </div>
        </div>
    );
};

export default Blogs;