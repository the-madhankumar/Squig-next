import React from 'react';
import { useTheme } from 'next-themes';

const Alpha = () => {
    const { theme } = useTheme();

    const isLightTheme = theme === 'light';

    return (
        <div className={`bg-${isLightTheme ? 'white' : 'gray-950'} dark:bg-${isLightTheme ? 'gray-950' : 'gray-800'} rounded-lg p-6 shadow-md border-l-4 border-teal-500 my-8 mx-9`}>
            <div className="flex items-center mb-2">
                <svg className={`w-6 h-6 mr-2 text-teal-500 dark:text-teal-300 ${isLightTheme ? 'text-teal-500' : 'text-teal-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className={`text-lg font-semibold ${isLightTheme ? 'text-teal-500' : 'text-teal-300'}`}>INFO</h2>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isLightTheme ? 'text-gray-800' : 'text-gray-300'}`}>Alpha Release</h3>
            <p className={`text-lg ${isLightTheme ? 'text-gray-700' : 'text-gray-400'} italic`}>
                Squig is currently in its alpha release, marking the initial steps in its journey. As we explore new horizons and gather valuable feedback, we invite you to be a part of this exciting phase. Please keep in mind that this is an early release, and we appreciate your patience and collaboration as we refine and enhance Squig for future releases.
            </p>
        </div>
    );
};

export default Alpha;
