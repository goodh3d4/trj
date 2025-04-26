import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

function App() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const videoScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            scale: videoScale,
            opacity: videoOpacity,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <source src="https://trojan.com/horse.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://trojan.com/logo-with-text.svg" 
              alt="Trojan Logo" 
              className="h-24 md:h-32 mx-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 relative font-serif"
          >
            <span className="shining-text">Solana Airdrop</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Claim your share of 100,000 SOL
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(192, 192, 192, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="open-modal bg-gradient-to-r from-silver to-gray-400 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 mb-8"
          >
            Connect Wallet
          </motion.button>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-xl font-bold text-silver">0.001</p>
              <p className="text-xs text-gray-400">SOL Fee</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-xl font-bold text-silver">2s</p>
              <p className="text-xs text-gray-400">Claim Time</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-xl font-bold text-silver">24h</p>
              <p className="text-xs text-gray-400">Distribution</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          whileHover={{ y: 5 }}
        >
          <ArrowDownIcon className="h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </div>

      {/* Why Trojan Section */}
      <motion.div 
        className="py-20 px-4 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative font-serif">
            <span className="shining-text">Why Trojan?</span>
          </h2>
          <motion.div 
            className="bg-black border border-gray-800 p-8 rounded-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(192, 192, 192, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 text-lg mb-4">
              As the fastest trading bot on Solana, Trojan has revolutionized automated trading with its cutting-edge technology. We're hosting this airdrop to give back to our incredible community that has supported us throughout our journey.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Industry-leading trading speed and efficiency</li>
              <li>Proven track record of successful trades</li>
              <li>Advanced security measures and risk management</li>
              <li>Dedicated to community growth and support</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative font-serif">
            <span className="shining-text">How the Airdrop Works</span>
          </h2>
          <div className="bg-black border border-gray-800 p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-silver">Eligibility Criteria</h3>
                <p className="text-gray-300">To be eligible for the airdrop, you must:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Have an active Solana wallet</li>
                  <li>Complete the verification process</li>
                  <li>Meet the minimum holding requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-silver">Distribution Process</h3>
                <p className="text-gray-300">The airdrop will be distributed in the following way:</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>First come, first served basis</li>
                  <li>Maximum 1 SOL per eligible wallet</li>
                  <li>Distribution will be completed within 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative font-serif">
            <span className="shining-text">How to Participate</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black border border-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-silver">1. Connect Wallet</h3>
              <p className="text-gray-400 align-middle">Connect your Solana wallet to check eligibility</p>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-silver">2. Verify Eligibility</h3>
              <p className="text-gray-400 align-middle">Check if you meet the airdrop requirements</p>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-silver">3. Claim Tokens</h3>
              <p className="text-gray-400 align-middle">Receive your SOL tokens instantly</p>
            </div>
          </div>
          
          {/* Claim Section */}
          <div className="bg-black border border-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-silver">Ready to Claim?</h3>
            <p className="text-gray-300 mb-6">
              Connect your wallet below to check your eligibility and claim your tokens. Your connection is read-only and your assets are completely safe.
            </p>
            <div className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(192, 192, 192, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="open-modal bg-gradient-to-r from-silver to-gray-400 text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Connect Wallet
              </motion.button>
              <p className="text-sm text-gray-400 align-middle">
                🔒 Read-only connection • Your assets are safe • No permissions required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative font-serif">
            <span className="shining-text">Join Our Community</span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <motion.a
              href="https://x.com/TrojanTrading"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 p-6 rounded-lg text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(192, 192, 192, 0.3)",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-silver font-serif">Twitter</h3>
              <p className="text-gray-400 align-middle">Follow for updates</p>
            </motion.a>
            <motion.a
              href="http://t.me/trojan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 p-6 rounded-lg text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(192, 192, 192, 0.3)",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-silver font-serif">Telegram</h3>
              <p className="text-gray-400 align-middle">Join our community</p>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="bg-black py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <motion.img 
            src="https://trojan.com/logo-with-text.svg" 
            alt="Trojan Logo" 
            className="h-12 mx-auto mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          <p>© 2025 Trojan Solana Airdrop. All rights reserved.</p>
        </div>
      </motion.footer>

      {/* Add CSS to prevent image dragging globally */}
      <style jsx global>{`
        img {
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
        }
      `}</style>
    </div>
  );
}

export default App; 
