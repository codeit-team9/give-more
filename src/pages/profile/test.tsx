import React from 'react';
import ApplyHistoryUi from '@/components/myprofile/ApplyHistoryUi';

export default function test() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzk5MzQ3My00YjE3LTRhODgtYTdlMS1hYTZiNWIwMWZlNGYiLCJpYXQiOjE3MDMwNTAxMDJ9.YTplzpRTNv_SWokngfeN7Jeh2GZy7b18qTo3-qcKDrk';
  return (
    <div>
      <ApplyHistoryUi token={token} />
    </div>
  );
}
