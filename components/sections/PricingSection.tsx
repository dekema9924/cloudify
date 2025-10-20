'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function PricingSection() {
    const plans = [
        {
            name: 'Basic',
            price: '$1',
            storage: '10 GB',
            description: 'Perfect for casual users who need secure cloud storage.',
            features: [
                'End-to-end encryption',
                'Access anywhere',
                'Basic sharing features',
            ],
            highlight: false,
        },
        {
            name: 'Pro',
            price: '$2',
            storage: '20 GB',
            description: 'Great for professionals who want more space and speed.',
            features: [
                'All Basic features',
                'Priority upload speed',
                'Version history',
                'Password-protected sharing links',
            ],
            highlight: true,
        },
        {
            name: 'Enterprise',
            price: '$10',
            storage: '1 TB',
            description: 'For teams and businesses that need full-scale storage and security.',
            features: [
                'All Pro features',
                'Team management',
                'Dedicated support',
                'Advanced analytics',
            ],
            highlight: false,
        },
    ]

    return (
        <section className=" py-24 px-6 flex flex-col items-center ">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-semibold text-center "
            >
                Choose Your Plan
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className=" text-center max-w-lg mb-16"
            >
                Simple, transparent pricing. Start small and scale with your needs.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-2xl border ${plan.highlight ? 'border-blue-500 bg-blue-300/10' : 'border-white/10 bg-[#d6d7db]'
                            } p-8 flex flex-col justify-between`}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                            <p className=" mb-6">{plan.description}</p>

                            <div className="mb-8">
                                <div className="text-4xl font-bold">
                                    {plan.price}
                                    <span className="text-lg font-normal "> /month</span>
                                </div>
                                <div className=" text-sm">{plan.storage} storage</div>
                            </div>

                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="text-green-400 w-5 h-5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`mt-10 w-full py-2.5 rounded-full font-semibold transition ${plan.highlight
                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                : 'bg-white text-black hover:bg-gray-100'
                                }`}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
