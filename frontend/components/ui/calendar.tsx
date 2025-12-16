"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean; isHighlighted?: boolean }> = ({
    day,
    isHeader,
    isHighlighted,
}) => {
    const bgClass = isHighlighted
        ? "bg-indigo-500 text-white"
        : "text-white/70";

    return (
        <div
            className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${isHeader ? "" : "rounded-xl"
                } ${bgClass}`}
        >
            <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
                {day}
            </span>
        </div>
    );
};

export function Calendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
        currentYear,
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const bookingLink = `mailto:zenvoatechnologies@gmail.com?subject=Meeting Request&body=Hi, I would like to schedule a meeting with Zenvoa Technologies.`;

    // Predetermined highlighted dates to avoid hydration mismatch
    const highlightedDates = [3, 7, 12, 15, 21, 24, 28];

    const renderCalendarDays = () => {
        let days: React.ReactNode[] = [
            ...dayNames.map((day, i) => (
                <CalendarDay key={`header-${day}`} day={day} isHeader />
            )),
            ...Array(firstDayOfWeek).map((_, i) => (
                <div
                    key={`empty-start-${i}`}
                    className="col-span-1 row-span-1 h-8 w-8"
                />
            )),
            ...Array(daysInMonth)
                .fill(null)
                .map((_, i) => (
                    <CalendarDay
                        key={`date-${i + 1}`}
                        day={i + 1}
                        isHighlighted={highlightedDates.includes(i + 1)}
                    />
                )),
        ];

        return days;
    };

    return (
        <BentoCard height="h-auto" linkTo={bookingLink}>
            <div className="grid h-full gap-5">
                <div>
                    <h2 className="mb-4 text-lg md:text-3xl font-semibold text-white">
                        Schedule a Meeting
                    </h2>
                    <p className="mb-2 text-xs md:text-md text-white/70">
                        Let's discuss your project and how we can help bring your vision to life!
                    </p>
                    <Button className="mt-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500">
                        Book Now
                    </Button>
                </div>
                <div className="transition-all duration-500 ease-out">
                    <div>
                        <div className="h-full w-full max-w-[550px] rounded-[24px] border border-white/10 p-2 transition-colors duration-100 group-hover:border-indigo-400">
                            <div
                                className="h-full rounded-2xl border-2 border-white/10 p-3 bg-white/5 backdrop-blur-sm"
                            >
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm text-white">
                                        <span className="font-medium">
                                            {currentMonth}, {currentYear}
                                        </span>
                                    </p>
                                    <span className="h-1 w-1 rounded-full bg-white/50">&nbsp;</span>
                                    <p className="text-xs text-white/70">30 min call</p>
                                </div>
                                <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4">
                                    {renderCalendarDays()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}

interface BentoCardProps {
    children: React.ReactNode;
    height?: string;
    rowSpan?: number;
    colSpan?: number;
    className?: string;
    showHoverGradient?: boolean;
    hideOverflow?: boolean;
    linkTo?: string;
}

export function BentoCard({
    children,
    height = "h-auto",
    className = "",
    showHoverGradient = true,
    hideOverflow = true,
    linkTo,
}: BentoCardProps) {
    const cardContent = (
        <div
            className={`group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-indigo-100/10 dark:hover:bg-indigo-900/10 ${hideOverflow && "overflow-hidden"
                } ${height} ${className}`}
        >
            {linkTo && (
                <div className="absolute bottom-4 right-6 z-[999] flex h-12 w-12 rotate-6 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                    <svg
                        className="h-6 w-6 text-indigo-600"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.25 15.25V6.75H8.75"
                        ></path>
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 7L6.75 17.25"
                        ></path>
                    </svg>
                </div>
            )}
            {showHoverGradient && (
                <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            )}
            {children}
        </div>
    );

    if (linkTo) {
        return linkTo.startsWith("/") ? (
            <Link href={linkTo} className="block">
                {cardContent}
            </Link>
        ) : (
            <a
                href={linkTo}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {cardContent}
            </a>
        );
    }

    return cardContent;
}
