import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
    return (
        <section className='relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from bg-purple-600 via-indigo-950 to-indigo-600'>
            <div className='absolute inset-0 before:absolute before:left-1/4 before-top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl'>
                <div className='container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32'>
                    <div className='flex-1 space-y-8 text-center md:text-left'>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
                            Explore the world through{" "}
                            <span className='bg-gradient-to-r from-violet-400 to-orange-500 bg-clip-text text-transparent'>Words</span>
                        </h1>

                        <p className='mx-auto max-w-2xl text-lg text-gray-300 md:text-xl'>Discover insightful articles, through-provoking  stories, and expert perspecives on technology, lifestyle and innovation</p>

                        <div className='flex flex-col items-center gap-4 sm;flex-row md:justify-start'>
                            <Button className='rounded-full bg-black text-white'>Start Reading</Button>
                            <Button variant={'outline'} className='rounded-full bg-white'>Explore Topics</Button>
                        </div>

                        <div className='grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md'>
                            <div className='space-y-2'>
                                <div className='text-2xl font-bold text-primary'>1K+</div>
                                <div className='text-sm text-gray-400'>Published Articles</div>
                            </div>
                            <div className='sapce-y-2'>
                                <div className='text-2xl font-bold text-primary'>80+</div>
                                <div className='text-sm text-gray-400'>Expert Writers</div>
                            </div>
                            <div className='sapce-y-2'>
                                <div className='text-2xl font-bold text-primary'>50K+</div>
                                <div className='text-sm text-gray-400'>Monthly Readers</div>
                            </div>
                        </div>
                    </div>
                    {/* Image frame */}
                    <div className='mt-12 flex-1 md:mt-0'>
                        <div className={cn("relative mx-auto w-64 h-64 rounded-2xl overflow-hidden", "bg-gradien-to-br from-white/5 to-transparent", "border border-primary/20 backdrop-blur-lg", "shadow-2xl shadow-indigo-500/10")}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;