import { Route, Routes, Navigate } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>aqui</p>} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}