import { Card } from "@/components/ui/card";

interface ReceiptItem {
  category: string;
  amount: number;
  description?: string;
}

interface ReceiptDisplayProps {
  title: string;
  items: ReceiptItem[];
  total: number;
  type: 'current' | 'predicted';
  date?: string;
}

export const ReceiptDisplay = ({ title, items, total, type, date }: ReceiptDisplayProps) => {
  return (
    <Card className="bg-receipt-paper p-6 shadow-receipt max-w-sm mx-auto">
      <div className="font-receipt text-sm space-y-1">
        {/* Header */}
        <div className="text-center border-b border-receipt-line pb-3 mb-4">
          <h3 className="font-bold text-lg text-receipt-total mb-1">Fin Receipt Buddy</h3>
          <p className="text-muted-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{date || new Date().toLocaleDateString()}</p>
        </div>

        {/* Items */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div className="flex-1">
                <span className="font-medium">{item.category}</span>
                {item.description && (
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                )}
              </div>
              <span className={`font-mono ${
                type === 'predicted' && item.amount > (items.find(i => i.category === item.category)?.amount || 0)
                  ? 'text-money-red' 
                  : 'text-foreground'
              }`}>
                ${item.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-receipt-line my-4"></div>

        {/* Total */}
        <div className="flex justify-between items-center font-bold text-base">
          <span>TOTAL</span>
          <span className={`font-mono ${
            type === 'predicted' 
              ? total > items.reduce((sum, item) => sum + item.amount, 0) 
                ? 'text-money-red' 
                : 'text-money-green'
              : 'text-receipt-total'
          }`}>
            ${total.toFixed(2)}
          </span>
        </div>

        {type === 'predicted' && (
          <div className="text-center mt-4 pt-3 border-t border-receipt-line">
            <p className="text-xs text-muted-foreground">
              AI-powered prediction based on your spending patterns
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-4 pt-3 border-t border-receipt-line">
          <p className="text-xs text-muted-foreground">Thank you for using Fin Receipt Buddy!</p>
        </div>
      </div>
    </Card>
  );
};