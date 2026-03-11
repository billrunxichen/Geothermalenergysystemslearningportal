import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Target, MessageCircle, FileText, DollarSign, TrendingUp } from 'lucide-react';

export function DesignProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const timeline = [
    {
      number: '2.3',
      title: 'Find Allies and Register Interest',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      question: 'Who are my allies? How do I find other likeminded people?',
      content: {
        main: 'Community projects move forward when you can forge a coalition of like-minded supporters. A coalition helps you show widespread support, take up different elements of collective problem-solving, and tap a larger network of resources.',
        points: [
          'People with different jobs, locations, and perspectives bring diverse ideas',
          'Coalition strengthens proposals for geothermal energy networks',
          'Align variety of stakeholders to show benefits to many parts of community',
          'Demonstrate widespread support to decision-makers'
        ]
      },
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MDAxNTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      number: '2.4',
      title: 'Design a Process for Your Coalition',
      icon: Target,
      color: 'from-emerald-400 to-green-500',
      question: 'What steps do we need to go through? What shapes the thinking of key decisionmakers?',
      content: {
        main: 'Once a core group is established, consider who to reach out to next and what role they might play. Are you looking to grow the core group of ongoing collaborators, or building broader support?',
        points: [
          'Identify key decisionmakers in the community',
          'Consider what information aligns with their goals',
          'Distinguish between core collaborators and broader supporters',
          'Map out roles and responsibilities within coalition',
          'Develop clear objectives and outcomes'
        ]
      },
      image: 'https://images.unsplash.com/photo-1767871495063-82d150582a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBkaXNjdXNzaW5nJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc3MDAxNTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      number: '2.5',
      title: 'Thinking about Financing & Ownership',
      icon: DollarSign,
      color: 'from-orange-400 to-red-500',
      question: 'Who pays for the transition? How will different communities govern these systems?',
      content: {
        main: 'Before a system is developed, it\'s imperative to have a discussion about what options exist for both financing and owning the community\'s TEN infrastructure. Many possible configurations exist.',
        points: [
          'Understand strengths and shortcomings of different configurations',
          'Coalition should come together around an approach',
          'Be prepared to interact with city/town government',
          'Engage with engineers and financial institutions',
          'Consider potential funders and stakeholders',
          'Review ownership models: utility, cooperative, or municipal'
        ]
      },
      image: 'https://images.unsplash.com/photo-1767789082653-e30a047584fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmljdCUyMGhlYXRpbmclMjBwaXBlc3xlbnwxfHx8fDE3NjkyMTI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="design-process" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Coalition Process Timeline</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Follow these sequential steps to build and organize your coalition effectively
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-emerald-400 to-orange-400 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        onClick={() => setActiveStep(isActive ? null : index)}
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        {/* Header with Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-70`} />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-slate-800">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-800">{step.title}</h3>
                          </div>

                          <p className="text-sm text-slate-600 italic mb-4">{step.question}</p>

                          <p className="text-slate-700 leading-relaxed mb-4">{step.content.main}</p>

                          {/* Expandable Details */}
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: isActive ? 'auto' : 0,
                              opacity: isActive ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-slate-200 space-y-2">
                              {step.content.points.map((point, idx) => (
                                <div key={idx} className={`flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-1.5 flex-shrink-0`} />
                                  <span className="text-sm text-slate-700">{point}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>

                          <div className="mt-4">
                            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                              {isActive ? '↑ Hide details' : '↓ Show details'}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-3">Building Momentum</h4>
              <p className="text-blue-100 leading-relaxed">
                These sequential steps help you build a strong coalition, engage the right stakeholders, and develop a 
                clear process for advancing geothermal energy in your community. Take time with each step to ensure solid 
                foundations for your project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
