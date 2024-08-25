import React from 'react';
import { useTheme } from 'next-themes';

const Alpha = () => {
    const { theme } = useTheme();

    const isLightTheme = theme === 'light';

    return (
        <div className={`rounded-lg p-6 shadow-md border-l-4 border-teal-500 my-8 mx-9`}>
            <div className="flex items-center gap-2 mb-2">
                <svg className={`h-5 w-5 mr-2 `} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className={`text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 text-2xl mb-6`}>Alpha Release</h3>
            </div>
            <p className={`text-lg italic`}>
                Squig is currently in its alpha release, marking the initial steps in its journey. As we explore new horizons and gather valuable feedback, we invite you to be a part of this exciting phase. Please keep in mind that this is an early release, and we appreciate your patience and collaboration as we refine and enhance Squig for future releases.
            </p>
        </div>
    );
};

export default Alpha;
