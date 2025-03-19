
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import BlurImage from '@/components/ui/BlurImage';
import { cn } from '@/lib/utils';

const MiniCart: React.FC = () => {
  const { state, toggleCart, updateQuantity, removeFromCart } = useCart();
  const { isOpen, items, total } = state;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          aria-hidden="true"
          onClick={() => toggleCart(false)}
        ></div>
        
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
          <div className="pointer-events-auto w-screen max-w-md animate-slide-in">
            <div className="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-foreground" id="slide-over-title">
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="-m-2 p-2 text-muted-foreground hover:text-foreground"
                      onClick={() => toggleCart(false)}
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                      <Button 
                        className="mt-4" 
                        onClick={() => {
                          toggleCart(false);
                          // Navigate to shop page using window.location
                          window.location.href = '/shop';
                        }}
                      >
                        Continue shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-border">
                        {items.map((item) => (
                          <li key={item.id} className="flex py-6 animate-fade-in">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                              <BlurImage
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-foreground">
                                  <h3>
                                    <Link to={`/product/${item.productId}`}>
                                      {item.title}
                                    </Link>
                                  </h3>
                                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {item.options && Object.entries(item.options).map(([key, value]) => (
                                    <span key={key} className="mr-2">{key}: {value}</span>
                                  ))}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-muted-foreground w-4 text-center">
                                    {item.quantity}
                                  </span>
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>

                                <Button
                                  type="button"
                                  variant="ghost"
                                  className="text-sm font-medium text-destructive"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {items.length > 0 && (
                <div className="border-t border-border py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-foreground">
                    <p>Subtotal</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                      onClick={() => toggleCart(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="font-medium text-primary hover:text-primary/80"
                        onClick={() => toggleCart(false)}
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
