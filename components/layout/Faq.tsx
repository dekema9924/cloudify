import React from 'react'

export default function Faq() {
    return (
        <>
            <section className=" mt-44 w-11/12 m-auto">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold">
                        Frequently asked questions
                    </h2>
                    <div className="grid pt-8 text-left border border-gray-300 bg-gray-100 md:gap-16 p-4 rounded-2xl md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    What is Cloudify?
                                </h3>
                                <p className="text-gray-900">
                                    Cloudify is a secure cloud storage platform that lets you upload, organize, and access your files from any device. Think of it as your personal online drive—fast, private, and easy to use.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    Is my data safe on Cloudify?
                                </h3>
                                <p className="text-gray-900">
                                    Yes. All files are encrypted both during upload and while stored on our servers. We use end-to-end encryption to ensure that only you can access your files.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    How much free storage do I get?
                                </h3>
                                <p className="text-gray-900">
                                    Every user gets <strong>10 GB</strong> of free storage space after signing up. You can upgrade anytime to increase your storage capacity.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    Can I share my files with others?
                                </h3>
                                <p className="text-gray-900">
                                    Absolutely. You can share any file or folder with a secure link or invite others via email. You can also set permissions like view-only or edit access.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    Can I access my files offline?
                                </h3>
                                <p className="text-gray-900">
                                    Yes, you can mark files for offline access. They’ll be downloaded to your device so you can view and edit them even without an internet connection.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    How does file versioning work?
                                </h3>
                                <p className="text-gray-900">
                                    Cloudify automatically saves previous versions of your files. You can restore older versions at any time if you accidentally overwrite or delete something.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    What devices does Cloudify support?
                                </h3>
                                <p className="text-gray-900">
                                    Cloudify works on all major platforms — web, iOS, Android, Windows, and macOS. Your files stay synced and up to date across all your devices.
                                </p>
                            </div>

                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                    </svg>
                                    How can I contact support?
                                </h3>
                                <p className="text-gray-900">
                                    You can reach our support team any time by visiting the{" "}
                                    <a href="#" className="font-medium underline text-primary-600 hover:no-underline">
                                        Help Center
                                    </a>{" "}
                                    or emailing us at <strong>dekema2000@gmail.com</strong>. We’ll respond as quickly as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
