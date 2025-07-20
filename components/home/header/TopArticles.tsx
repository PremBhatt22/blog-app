import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopArticles = () => {
    return (
        <div className='grid gap-0 sm:grid-cols-2 lg:grid-cols-3'>
            <Card className={cn("group relative overflow-hidden transition-all hover:scale-[1.02]", "border-gray-200/50 dark:border-white/10", "bg-gray-800 dark:bg-violet-900 dark:bg-grey-900/50 backdrop-blur-lg")}>
                <div className='px-4'>
                    <Link href={`/articles/${1234}`}>
                        <div className='relative mb-4 h-50 w-full overflow-hidden rounded-xl'>
                            <Image
                                src={"https://images.pexels.com/photos/5076522/pexels-photo-5076522.jpeg"}
                                className='object-cover'
                                fill
                                alt='article image'
                            />
                        </div>
                        <div className='flex items-center gap-3 text-black text-sm dark:text-white'>
                            <Avatar className='h-8 w-8'>
                                <AvatarImage src="/" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className='h-8'>Prem Bhatt</span>
                        </div>
                        <h3 className='mt-1 text-xl font-semibold text-gray-900 dark:text-white'>How to Type Super Fassss...</h3>
                        <p className=' text-gray-600 dark:text-gray-300'>Science & Technology</p>
                        <div className='mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-white'>
                            <span>12 Feb</span>
                            <span>{12} minutes to read</span>
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default TopArticles;