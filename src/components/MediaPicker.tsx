'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {

    const [preview, setPreview] = useState<string | null>(null)

    function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target

        if (!files) {
            // eslint-disable-next-line no-useless-return
            return
        }
        const previewUrl = URL.createObjectURL(files[0])

        setPreview(previewUrl)

    }

    return (
        <>
            <input
                onChange={onMediaSelected}
                name="coverUrl"
                type="file"
                id="media"
                accept="image/*"
                className="w-0 h-0 invisible"
            />


            {/*  eslint-disable-next-line @next/next/no-img-element */}
            {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
        </>

    )

}