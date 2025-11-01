
import mongoose, { Schema, models } from "mongoose";

const FileSchema = new Schema(
    {
        title: { required: true, type: String },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        originalName: { type: String, required: true },
        mimeType: { type: String },

        size: { type: Number, required: true }, // bytes

        fileUrl: { type: String, required: true },

        // optional: allow deleting and file visibility
        isPublic: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const File = models.File || mongoose.model("File", FileSchema);
export default File;

