'use client'

import { fetchCardData } from '@/app/lib/data';
import DashboardSkeleton from '@/app/ui/skeletons';
import { useEffect } from 'react';

export default function Loading() {

  return <DashboardSkeleton />;
}
