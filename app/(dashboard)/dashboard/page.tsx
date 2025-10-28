

"use client";

import React from "react";
import Grid from "@/components/layout/dashboardlayout/Grid";
import Table from "@/components/layout/dashboardlayout/Table";
import { usemodalcontext } from "@/providers/ModalProvider";

export default function DashboardPage() {
    const { isTableMode } = usemodalcontext()
    return (
        <>
            {
                isTableMode == 'grid' ? <Grid /> : <Table />
            }
        </>
    );
}
